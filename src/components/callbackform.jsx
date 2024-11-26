import { ChevronDown } from "lucide-react"
import { Card } from "./card"
import { Button } from "./Button"

export default function CallbackForm() {
  return (
      <>
      <Card className="w-full max-w-2xl bg-slate-700 text-white p-6 rounded-2xl">
        <h1 className="text-2xl font-semibold mb-6">Request a call back</h1>
        <hr className="border-t-4 border-white mb-8" />
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Student&apos;s full name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Ex: Rohit Sharma"
                  className="w-full px-4 py-3 bg-black rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="mobile" className="block text-sm">
                Mobile Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Ex: +91 9876543210"
                  className="w-full px-4 py-3 bg-black rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="class" className="block text-sm">
                Class
              </label>
              <div className="relative">
                <select
                  id="class"
                  defaultValue="6th"
                  className="w-full px-4 py-3 bg-black rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="goals" className="block text-sm">
                Goals
              </label>
              <div className="relative">
                <select
                  id="goals"
                  defaultValue="JEE ADVANCED"
                  className="w-full px-4 py-3 bg-black rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>JEE ADVANCED</option>
                  <option>NEET</option>
                  <option>FOUNDATION</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="courses" className="block text-sm">
                Preferred Courses
              </label>
              <div className="relative">
                <select
                  id="courses"
                  defaultValue="Online Courses"
                  className="w-full px-4 py-3 bg-black rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Online Courses</option>
                  <option>Offline Courses</option>
                  <option>Hybrid Courses</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm">
                State
              </label>
              <div className="relative">
                <select
                  id="state"
                  defaultValue="Andaman and Nicobar Islands"
                  className="w-full px-4 py-3 bg-black rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Andaman and Nicobar Islands</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  {/* Add other states */}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-300 text-center">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms & Conditions
            </a>
          </div>

          <Button 
            className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-colors">
            Submit
          </Button>
        </form>
      </Card>
      </>
  )
}

