# MindEase Integration Guide

This document provides detailed instructions for integrating AI/ML models, IoT sensors, and third-party services with the MindEase platform.

## Table of Contents

1. [Overview](#overview)
2. [Facial Emotion Detection](#facial-emotion-detection)
3. [Chatbot Integration](#chatbot-integration)
4. [IoT Sensor Integration](#iot-sensor-integration)
5. [Data Fusion Algorithm](#data-fusion-algorithm)
6. [Database Setup](#database-setup)
7. [Authentication](#authentication)
8. [Security Best Practices](#security-best-practices)

---

## Overview

MindEase currently operates with mock data and placeholder implementations. This guide shows you how to replace these with production-ready solutions.

### Integration Checklist

- [ ] Set up database (Supabase recommended)
- [ ] Implement authentication (JWT or session-based)
- [ ] Integrate facial emotion detection model
- [ ] Connect chatbot API (OpenAI, Gemini, or Rasa)
- [ ] Set up IoT sensor streaming (ESP32 + MAX30102)
- [ ] Implement data fusion algorithm
- [ ] Configure HTTPS/TLS
- [ ] Test and validate all integrations

---

## Facial Emotion Detection

### Option 1: TensorFlow.js (Client-Side)

**Pros**: No server required, instant feedback, privacy-preserving
**Cons**: Limited accuracy, browser compatibility issues

#### Implementation Steps

1. Install dependencies:
```bash
npm install @tensorflow/tfjs @tensorflow-models/face-landmarks-detection
```

2. Create `/lib/emotionDetection.ts`:
```typescript
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

export async function detectEmotion(videoElement: HTMLVideoElement) {
  // Load face detection model
  const model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
  );

  // Detect faces
  const predictions = await model.estimateFaces({
    input: videoElement,
    returnTensors: false,
    flipHorizontal: false,
  });

  if (predictions.length > 0) {
    // TODO: Add emotion classification layer
    // Extract facial features and pass through emotion CNN
    const features = extractFeatures(predictions[0]);
    const emotionModel = await tf.loadLayersModel('/models/emotion-model.json');
    const emotion = await emotionModel.predict(features);

    return {
      emotion: getEmotionLabel(emotion),
      confidence: getConfidence(emotion),
      timestamp: new Date().toISOString(),
    };
  }

  return null;
}
```

3. Update `/api/emotion/route.ts`:
```typescript
export async function POST(request: NextRequest) {
  const { imageData } = await request.json();

  // Process image and detect emotion
  const result = await detectEmotion(imageData);

  return NextResponse.json(result);
}
```

### Option 2: Python Backend (Server-Side)

**Pros**: Better accuracy, more model options (DeepFace, FER2013)
**Cons**: Requires separate server, increased latency

#### Implementation Steps

1. Create Python FastAPI backend:
```python
from fastapi import FastAPI, UploadFile
from deepface import DeepFace
import cv2
import numpy as np

app = FastAPI()

@app.post("/detect-emotion")
async def detect_emotion(image: UploadFile):
    # Read image
    contents = await image.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Analyze emotion
    try:
        result = DeepFace.analyze(
            img,
            actions=['emotion'],
            enforce_detection=False
        )

        return {
            "emotion": result[0]['dominant_emotion'],
            "confidence": result[0]['emotion'][result[0]['dominant_emotion']],
            "all_emotions": result[0]['emotion'],
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        return {"error": str(e)}
```

2. Deploy Python service (Docker recommended):
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

3. Update Next.js API to proxy requests:
```typescript
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const response = await fetch('http://python-backend:8000/detect-emotion', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return NextResponse.json(data);
}
```

---

## Chatbot Integration

### Option 1: OpenAI GPT

**Cost**: Pay per token (~$0.002/1K tokens for GPT-3.5)
**Latency**: ~1-3 seconds

```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const { message, context } = await request.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an empathetic emotional support companion. The user's current emotional state is: ${context?.emotion || 'unknown'}. Provide compassionate, non-judgmental support. If the user expresses suicidal thoughts, immediately provide crisis helpline information (988).`
      },
      {
        role: "user",
        content: message
      }
    ],
    temperature: 0.7,
    max_tokens: 200,
  });

  return NextResponse.json({
    response: completion.choices[0].message.content,
    sentiment: context?.emotion,
    timestamp: new Date().toISOString(),
  });
}
```

### Option 2: Google Gemini

**Cost**: Free tier available, then pay per request
**Latency**: ~1-2 seconds

```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request: NextRequest) {
  const { message, context } = await request.json();

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `You are an empathetic emotional support companion. The user is feeling ${context?.emotion || 'neutral'}. User message: "${message}". Provide supportive, compassionate response.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return NextResponse.json({
    response: response.text(),
    sentiment: context?.emotion,
    timestamp: new Date().toISOString(),
  });
}
```

### Option 3: Self-Hosted Rasa

**Cost**: Free (self-hosted)
**Latency**: <500ms (local deployment)

1. Install Rasa:
```bash
pip install rasa
rasa init
```

2. Define intents in `data/nlu.yml`:
```yaml
version: "3.1"
nlu:
  - intent: express_sadness
    examples: |
      - I'm feeling sad
      - I'm depressed
      - Everything feels hopeless

  - intent: express_anxiety
    examples: |
      - I'm anxious
      - I'm worried
      - I can't stop worrying
```

3. Define responses in `domain.yml`:
```yaml
responses:
  utter_comfort_sadness:
    - text: "I'm sorry you're feeling sad. It's okay to feel this way. Would you like to talk about what's troubling you?"

  utter_comfort_anxiety:
    - text: "I understand that anxiety can be overwhelming. Let's take a moment together. Try taking a slow, deep breath."
```

4. Create Next.js integration:
```typescript
export async function POST(request: NextRequest) {
  const { message } = await request.json();

  const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: 'user-id',
      message: message,
    }),
  });

  const data = await response.json();

  return NextResponse.json({
    response: data[0]?.text || "I'm here to listen.",
    timestamp: new Date().toISOString(),
  });
}
```

---

## IoT Sensor Integration

### Hardware Requirements

- **MAX30102 Pulse Oximeter Sensor** (~$5)
- **ESP32 Development Board** (~$10)
- **Jumper Wires**

### Wiring Diagram

```
MAX30102        ESP32
--------        -----
VCC     ------> 3.3V
GND     ------> GND
SDA     ------> GPIO 21
SCL     ------> GPIO 22
```

### ESP32 Firmware (Arduino)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Wire.h>
#include "MAX30105.h"
#include "heartRate.h"

MAX30105 particleSensor;

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* serverURL = "https://your-domain.com/api/sensors/stream";

void setup() {
  Serial.begin(115200);

  // Initialize sensor
  Wire.begin();
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) {
    Serial.println("MAX30105 not found!");
    while (1);
  }

  particleSensor.setup();
  particleSensor.setPulseAmplitudeRed(0x0A);

  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");
}

void loop() {
  long irValue = particleSensor.getIR();

  if (checkForBeat(irValue)) {
    long delta = millis() - lastBeat;
    lastBeat = millis();

    float beatsPerMinute = 60 / (delta / 1000.0);

    if (beatsPerMinute < 255 && beatsPerMinute > 20) {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE;

      int avgHR = 0;
      for (byte x = 0; x < RATE_SIZE; x++)
        avgHR += rates[x];
      avgHR /= RATE_SIZE;

      // Read SpO2
      int spO2 = particleSensor.getSpO2();

      // Send to server
      sendData(avgHR, spO2);
    }
  }

  delay(5000); // Send every 5 seconds
}

void sendData(int hr, int spO2) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverURL);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("Authorization", "Bearer YOUR_API_KEY");

    StaticJsonDocument<200> doc;
    doc["hr"] = hr;
    doc["spO2"] = spO2;
    doc["device_id"] = "esp32-001";
    doc["timestamp"] = millis();

    String payload;
    serializeJson(doc, payload);

    int httpCode = http.POST(payload);

    if (httpCode > 0) {
      Serial.printf("HTTP Response: %d\n", httpCode);
    }

    http.end();
  }
}
```

### Next.js API Endpoint

Create `/api/sensors/stream/route.ts`:

```typescript
export async function POST(request: NextRequest) {
  const { hr, spO2, device_id, timestamp } = await request.json();

  // Validate data
  if (!hr || !spO2 || hr < 30 || hr > 220 || spO2 < 70 || spO2 > 100) {
    return NextResponse.json(
      { error: 'Invalid sensor data' },
      { status: 400 }
    );
  }

  // Store in database (Supabase example)
  const { data, error } = await supabase
    .from('sensor_readings')
    .insert({
      hr,
      spO2,
      device_id,
      timestamp: new Date().toISOString(),
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
```

---

## Data Fusion Algorithm

Combine facial emotion and sensor data for more accurate emotion detection.

Create `/lib/emotionFusion.ts`:

```typescript
interface EmotionSource {
  facial?: {
    emotion: string;
    confidence: number;
  };
  sensors?: {
    hr: number;
    spO2: number;
    hrv?: number;
  };
}

export function fuseEmotionData(sources: EmotionSource): {
  emotion: string;
  confidence: number;
  sources: string[];
} {
  const weights = {
    facial: 0.6,
    sensors: 0.4,
  };

  // Map physiological data to emotions
  const sensorEmotion = inferEmotionFromSensors(sources.sensors);

  // Weighted fusion
  if (sources.facial && sensorEmotion) {
    // If both sources agree, increase confidence
    if (sources.facial.emotion === sensorEmotion.emotion) {
      return {
        emotion: sources.facial.emotion,
        confidence: Math.min(
          sources.facial.confidence * weights.facial +
          sensorEmotion.confidence * weights.sensors +
          0.15, // Bonus for agreement
          1.0
        ),
        sources: ['facial', 'sensors'],
      };
    }

    // If disagree, use weighted average
    return sources.facial.confidence > sensorEmotion.confidence
      ? {
          emotion: sources.facial.emotion,
          confidence: sources.facial.confidence * weights.facial,
          sources: ['facial (primary)', 'sensors (secondary)'],
        }
      : {
          emotion: sensorEmotion.emotion,
          confidence: sensorEmotion.confidence * weights.sensors,
          sources: ['sensors (primary)', 'facial (secondary)'],
        };
  }

  // Fallback to available source
  if (sources.facial) {
    return {
      emotion: sources.facial.emotion,
      confidence: sources.facial.confidence,
      sources: ['facial'],
    };
  }

  if (sensorEmotion) {
    return {
      emotion: sensorEmotion.emotion,
      confidence: sensorEmotion.confidence,
      sources: ['sensors'],
    };
  }

  return {
    emotion: 'neutral',
    confidence: 0.5,
    sources: ['default'],
  };
}

function inferEmotionFromSensors(sensors?: EmotionSource['sensors']): {
  emotion: string;
  confidence: number;
} | null {
  if (!sensors) return null;

  const { hr, hrv } = sensors;

  // High HR + low HRV = anxiety/stress
  if (hr > 100 && (hrv || 0) < 30) {
    return { emotion: 'anxious', confidence: 0.7 };
  }

  // Very low HR = calm/relaxed
  if (hr < 60) {
    return { emotion: 'calm', confidence: 0.65 };
  }

  // Moderate values = neutral
  return { emotion: 'neutral', confidence: 0.5 };
}
```

---

## Database Setup

### Recommended: Supabase

1. Create Supabase project at [supabase.com](https://supabase.com)

2. Create tables:

```sql
-- Mood entries
CREATE TABLE mood_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  mood_score FLOAT NOT NULL,
  emotion VARCHAR(50) NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Sensor readings
CREATE TABLE sensor_readings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  hr INTEGER NOT NULL,
  spO2 INTEGER NOT NULL,
  hrv INTEGER,
  temperature FLOAT,
  device_id VARCHAR(100),
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Chat history
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  message TEXT NOT NULL,
  is_user BOOLEAN NOT NULL,
  emotion_context VARCHAR(50),
  timestamp TIMESTAMPTZ DEFAULT NOW()
);
```

3. Enable Row Level Security (RLS):

```sql
ALTER TABLE mood_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE sensor_readings ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY "Users can view own mood entries"
  ON mood_entries FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own mood entries"
  ON mood_entries FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

---

## Authentication

### Option 1: Supabase Auth (Recommended)

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password',
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password',
});

// Get session
const { data: { session } } = await supabase.auth.getSession();
```

### Option 2: NextAuth.js

```typescript
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Verify credentials
        const user = await verifyUser(credentials);
        return user || null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
```

---

## Security Best Practices

### 1. HTTPS/TLS
- Use Let's Encrypt for free SSL certificates
- Enforce HTTPS in production (redirect HTTP → HTTPS)

### 2. API Authentication
```typescript
// Middleware for protected routes
export async function middleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const verified = await verifyJWT(token);
  if (!verified) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  return NextResponse.next();
}
```

### 3. Rate Limiting
```typescript
import { RateLimiter } from 'limiter';

const limiter = new RateLimiter({
  tokensPerInterval: 10,
  interval: 'minute',
});

export async function POST(request: NextRequest) {
  const remaining = await limiter.removeTokens(1);

  if (remaining < 0) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }

  // Process request...
}
```

### 4. Data Encryption
- Encrypt sensitive data at rest using AES-256
- Use bcrypt for password hashing (12+ rounds)
- Never log sensitive information

### 5. Input Validation
```typescript
import { z } from 'zod';

const sensorSchema = z.object({
  hr: z.number().min(30).max(220),
  spO2: z.number().min(70).max(100),
  device_id: z.string().max(100),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const validated = sensorSchema.parse(body);
    // Process validated data...
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid input' },
      { status: 400 }
    );
  }
}
```

---

## Testing Integration

### 1. Manual Testing
- Use Postman or cURL to test API endpoints
- Verify sensor data flow with ESP32 serial monitor
- Test chatbot responses with various inputs

### 2. Automated Testing
```typescript
describe('Emotion API', () => {
  it('should detect emotion from image', async () => {
    const response = await fetch('/api/emotion', {
      method: 'POST',
      body: JSON.stringify({ imageData: mockImage }),
    });

    const data = await response.json();
    expect(data.emotion).toBeDefined();
    expect(data.confidence).toBeGreaterThan(0);
  });
});
```

---

## Support

For questions or issues with integration:
- Email: dev@mindease.com
- GitHub Issues: [github.com/mindease/issues](https://github.com/mindease/issues)
- Documentation: [docs.mindease.com](https://docs.mindease.com)

---

**Last Updated**: November 1, 2025
