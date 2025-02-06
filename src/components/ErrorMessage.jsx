import { AlertCircle } from "lucide-react"

export default function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5" />
          <p className="text-lg font-semibold">Error</p>
        </div>
        <p className="mt-2 text-sm">{message}</p>
      </div>
      <div className="mt-8 neon-glow text-primary text-xl font-bold">
        {"{"}System Malfunction{"}"}
      </div>
    </div>
  )
}

