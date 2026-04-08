import { Rocket, MapPin, Users, CalendarDays, Coffee, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-4 text-gray-800 space-y-4">
      <h1 className="text-2xl font-semibold">👋 Good morning, Jim!</h1>
      <p className="text-sm text-gray-600">Here’s your Orbit today ⤵️</p>

      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <MapPin className="text-purple-600" />
          <div>
            <p className="text-sm font-medium">Arrive by 9:45 – light traffic</p>
            <p className="text-xs text-gray-500">Suggested by your commute AI</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <Users className="text-purple-600" />
          <div>
            <p className="text-sm font-medium">UX Team + Robin + CEO onsite</p>
            <p className="text-xs text-gray-500">Good day for in-person convos</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <MapPin className="text-purple-600" />
          <div>
            <p className="text-sm font-medium">Desk 14B – Quiet Zone</p>
            <p className="text-xs text-gray-500">By the window, near Studio B</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <CalendarDays className="text-purple-600" />
          <div>
            <p className="text-sm font-medium">11am: Sprint Retro – Room Atlas</p>
            <p className="text-xs text-gray-500">Bookmarked in your calendar</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <Coffee className="text-purple-600" />
          <div>
            <p className="text-sm font-medium">2pm: 1:1 w/ Leah @ Bluebird Café</p>
            <p className="text-xs text-gray-500">Ask her about the AI prototype!</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2 pt-2">
        <Button variant="outline" className="flex-1 text-purple-700 border-purple-300">
          Change Plan
        </Button>
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
          Plan Route <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default App;
