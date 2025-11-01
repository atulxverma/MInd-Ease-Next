# MindEase - Your Digital Emotional Companion

A comprehensive emotional support platform combining cutting-edge technology with compassionate design. MindEase leverages multimodal emotion detection to provide personalized, empathetic care through intelligent conversation and wellbeing tracking.

![MindEase](https://via.placeholder.com/1200x400/14b8a6/ffffff?text=MindEase+-+Your+Digital+Emotional+Companion)

## Overview

MindEase is a Next.js-based web application that serves as a foundation for integrating advanced AI/ML models and IoT hardware. The current implementation provides a fully functional UI with mock data and clear integration points for production-ready solutions.

### Key Features

- **Multimodal Emotion Detection** (Placeholder): Combines facial expression analysis with physiological sensor data
- **Empathetic Chat Support**: AI-powered conversation with canned responses (ready for OpenAI/Gemini integration)
- **Mood History Dashboard**: Track emotional wellbeing over time with interactive charts
- **Sensor Integration Ready**: ESP32 + MAX30102 integration guidelines and API endpoints
- **Privacy & Safety First**: Built-in crisis helpline access and secure data handling practices

## Tech Stack

- **Framework**: Next.js 13.5+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mindease.git
cd mindease
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

### Type Checking

```bash
npm run typecheck
```

## Project Structure

```
mindease/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── chat/         # Chat endpoint
│   │   ├── mood/         # Mood data endpoint
│   │   ├── sensors/      # Sensor data endpoints
│   │   ├── emotion/      # Emotion detection endpoint
│   │   ├── feedback/     # User feedback endpoint
│   │   └── contact/      # Contact form endpoint
│   ├── about/            # About page
│   ├── chat/             # Chat interface page
│   ├── dashboard/        # Mood dashboard page
│   ├── features/         # Features overview page
│   ├── sensors/          # Sensor integration guide
│   ├── research/         # Research & evaluation page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy page
│   ├── safety/           # Safety guidelines page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeatureCard.tsx
│   ├── ChatWindow.tsx
│   ├── MessageBubble.tsx
│   ├── DashboardCard.tsx
│   ├── ChartCard.tsx
│   ├── SensorWidget.tsx
│   └── DeveloperPanel.tsx
├── data/                  # Mock data files
│   ├── mockMood.json
│   ├── mockSensors.json
│   └── mockChatResponses.json
├── lib/                   # Utility functions
│   ├── mockData.ts       # Mock data helpers
│   └── utils.ts          # General utilities
├── public/               # Static assets
└── docs/                 # Documentation
    └── integration.md    # Integration guide
```

## API Endpoints

All API endpoints return JSON and are located under `/api/*`:

### Chat
- **POST** `/api/chat` - Send message and receive bot response
  ```json
  {
    "message": "I'm feeling anxious",
    "context": { "emotion": "anxious" }
  }
  ```

### Mood Data
- **GET** `/api/mood?start=DATE&end=DATE` - Fetch mood history
  ```json
  {
    "data": [{ "ts": "2025-10-25T10:00:00Z", "mood_score": 0.4, "emotion": "sad" }],
    "count": 12
  }
  ```

### Sensors
- **GET** `/api/sensors/latest` - Get latest sensor readings
  ```json
  {
    "data": {
      "hr": 72,
      "spO2": 98,
      "timestamp": "2025-11-01T12:00:00Z",
      "device_id": "esp32-001"
    }
  }
  ```

### Emotion Detection
- **GET** `/api/emotion` - Get current emotion state (mock)
  ```json
  {
    "emotion": "calm",
    "score": 0.72,
    "sources": ["camera (placeholder)", "sensors (mock)"],
    "timestamp": "2025-11-01T12:00:00Z"
  }
  ```

### Feedback
- **POST** `/api/feedback` - Submit user feedback
- **GET** `/api/feedback` - Retrieve feedback entries

### Contact
- **POST** `/api/contact` - Submit contact form

## Integration Guide

### AI/ML Integration

#### 1. Facial Emotion Detection

Replace the mock implementation in `/api/emotion/route.ts` with your chosen model:

**Option A: TensorFlow.js**
```typescript
import * as tf from '@tensorflow/tfjs';
import { loadFaceDetectionModel } from '@/lib/faceDetection';

// Load pre-trained FER2013 model
const model = await tf.loadLayersModel('/models/emotion-model.json');
```

**Option B: OpenCV + Python Backend**
```python
# Python FastAPI endpoint
import cv2
from deepface import DeepFace

@app.post("/detect-emotion")
async def detect_emotion(image: UploadFile):
    result = DeepFace.analyze(image, actions=['emotion'])
    return {"emotion": result['dominant_emotion'], "confidence": result['confidence']}
```

#### 2. Chatbot Integration

Replace the mock responses in `/api/chat/route.ts`:

**Option A: OpenAI GPT**
```typescript
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: "You are an empathetic emotional support companion." },
    { role: "user", content: message }
  ],
});
```

**Option B: Google Gemini**
```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
```

**Option C: Rasa**
```bash
# Self-hosted Rasa NLU + Core
POST http://localhost:5005/webhooks/rest/webhook
{
  "sender": "user-id",
  "message": "I'm feeling anxious"
}
```

### IoT Sensor Integration

#### Hardware Setup

1. **MAX30102 Pulse Oximeter**
   - VCC → 3.3V
   - GND → GND
   - SDA → GPIO 21 (ESP32)
   - SCL → GPIO 22 (ESP32)

2. **ESP32 Firmware** (Arduino sketch example):
```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <Wire.h>
#include "MAX30105.h"

MAX30105 particleSensor;

void setup() {
  Wire.begin();
  particleSensor.begin(Wire, I2C_SPEED_FAST);

  // Configure WiFi
  WiFi.begin(ssid, password);
}

void loop() {
  int hr = particleSensor.getHeartRate();
  int spO2 = particleSensor.getSpO2();

  // POST to API
  HTTPClient http;
  http.begin("https://your-domain.com/api/sensors/stream");
  http.addHeader("Content-Type", "application/json");

  String payload = "{\"hr\":" + String(hr) + ",\"spO2\":" + String(spO2) + "}";
  http.POST(payload);
  http.end();

  delay(5000); // Send every 5 seconds
}
```

#### API Integration

Create `/api/sensors/stream/route.ts`:
```typescript
export async function POST(request: NextRequest) {
  const { hr, spO2, device_id } = await request.json();

  // Store in database
  await db.insert({
    hr,
    spO2,
    timestamp: new Date(),
    device_id
  });

  return NextResponse.json({ success: true });
}
```

### Security Considerations

1. **HTTPS/TLS**: Always use encrypted connections
2. **Authentication**: Implement JWT or session-based auth
3. **Rate Limiting**: Prevent API abuse
4. **Data Encryption**: Encrypt health data at rest
5. **GDPR Compliance**: Obtain explicit consent before data collection

For detailed integration instructions, see [docs/integration.md](docs/integration.md).

## Testing

### Manual Testing
1. Navigate to `/chat` and test conversation flow
2. Visit `/dashboard` to view mood charts
3. Use Developer Panel (bottom-right) to simulate sensor inputs

### Unit Tests (Placeholder)
```bash
npm test
```

Test files should be added in `__tests__/` directory:
- `components/*.test.tsx`
- `api/*.test.ts`
- `lib/*.test.ts`

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Environment Variables

Create `.env.local` for development:
```env
# Not required for mock implementation
# Add these when integrating real services:

# OPENAI_API_KEY=your_openai_key
# GEMINI_API_KEY=your_gemini_key
# DATABASE_URL=your_database_url
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support & Contact

- **Email**: support@mindease.com
- **Website**: [https://mindease.com](https://mindease.com)
- **Crisis Helpline**: 988 (24/7)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Charts by [Recharts](https://recharts.org/)

---

**Important**: MindEase is not a replacement for professional mental health care. If you're experiencing a mental health crisis, please contact emergency services or a crisis helpline immediately.
#   M I n d - E a s e - N e x t  
 