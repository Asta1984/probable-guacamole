import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">MyExam EduBlogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Privacy policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Public notice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Help & Support Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Refund policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Transfer policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact us</a></li>
            </ul>
          </div>

          {/* Popular goals Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Popular goals</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">NEET UG</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">JEE Advanced</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">6th to 10th</a></li>
            </ul>
          </div>

          {/* Courses Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Online Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Distance Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Online Test Series</a></li>
            </ul>
          </div>

          {/* Centers Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Centers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Kota</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Bangalore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Indore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Delhi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">More centres</a></li>
            </ul>
          </div>

          {/* Exam information Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Exam information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">JEE Main</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">JEE Advanced</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">NEET UG</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Class 10</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Class 12</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Olympiad Exam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">NEET Online Test Series</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">JEE Online Test Series</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">JEE Main Online Test Series</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="mt-12 pt-8 border-t border-slate-600 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-300">
            ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

