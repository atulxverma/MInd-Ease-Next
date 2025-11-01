import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SensorWidget from '@/components/SensorWidget';
import { Activity, Wifi, Shield, Code, Zap, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sensor Integration - MindEase',
  description: 'Guide for integrating MAX30102 and other IoT sensors with MindEase platform.',
};

export default function SensorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Sensor Integration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect IoT sensors to capture real-time physiological data
          </p>
        </div>

        <Alert className="mb-8 border-yellow-200 bg-yellow-50">
          <AlertDescription className="text-yellow-900">
            <strong>Integration Placeholder:</strong> This page shows mock sensor data. Follow the
            integration guide below to connect real MAX30102 sensors via ESP32.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Activity className="h-6 w-6 text-teal-600 mr-3" aria-hidden="true" />
                  Supported Sensors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">MAX30102 Pulse Oximeter</h3>
                  <p className="text-gray-700 mb-3">
                    Integrated sensor for heart rate and SpO₂ monitoring. Connects via I2C protocol to ESP32 microcontroller.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Specifications:</p>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Heart Rate Range: 30-220 BPM</li>
                      <li>SpO₂ Range: 70-100%</li>
                      <li>I2C Address: 0x57</li>
                      <li>Supply Voltage: 3.3V</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Code className="h-5 w-5 text-teal-600 mr-2" aria-hidden="true" />
                    Expected Data Format
                  </h3>
                  <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "timestamp": "2025-11-01T12:00:00Z",
  "hr": 72,
  "spO2": 98,
  "hrv": 45,
  "temperature": 36.6,
  "device_id": "esp32-001"
}`}</pre>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Wifi className="h-5 w-5 text-teal-600 mr-2" aria-hidden="true" />
                    Integration Methods
                  </h3>
                  <div className="space-y-4">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-base">Method 1: HTTP POST</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-gray-700">Send sensor readings via HTTP POST request:</p>
                        <div className="bg-white border border-gray-200 rounded p-2 font-mono text-xs overflow-x-auto">
                          POST https://your-domain.com/api/sensors/stream
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-base">Method 2: WebSocket</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-gray-700">Establish WebSocket connection for real-time streaming:</p>
                        <div className="bg-white border border-gray-200 rounded p-2 font-mono text-xs overflow-x-auto">
                          ws://your-domain.com/api/sensors/live
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Settings className="h-5 w-5 text-teal-600 mr-2" aria-hidden="true" />
                    ESP32 Setup Guide
                  </h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                      <div>
                        <strong>Connect MAX30102</strong> to ESP32 via I2C (SDA to GPIO21, SCL to GPIO22)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                      <div>
                        <strong>Install libraries:</strong> MAX30105 and WiFi libraries in Arduino IDE
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                      <div>
                        <strong>Configure WiFi</strong> credentials and API endpoint URL
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                      <div>
                        <strong>Upload firmware</strong> to ESP32 and monitor serial output
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-teal-600 mr-2" aria-hidden="true" />
                    Security Guidelines
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Zap className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Use HTTPS/TLS:</strong> Always encrypt data in transit</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Implement authentication:</strong> Use API keys or JWT tokens</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Rate limiting:</strong> Prevent abuse with request throttling</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Data encryption:</strong> Store sensitive health data encrypted at rest</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span><strong>User consent:</strong> Obtain explicit permission before collecting physiological data</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <SensorWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
