import { Card } from "./card"
import { ChevronRight } from 'lucide-react'

export default function ExamResults() {
  const exams = ['JEE 2024', 'NEET 2024']

  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-2 gap-20 mb-10 w-9/12">
        {exams.map((exam) => (
          <div
            key={exam}
            className="border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300 h-12 flex items-center justify-center"
          >
            <Card className="w-full h-full">
              <button className="flex items-center justify-between px-4 py-2 w-full h-full text-white">
                <span>View {exam} Results</span>
                <ChevronRight className=" h-5 w-5 ml-44" />
              </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

