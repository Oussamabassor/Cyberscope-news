import { AlertCircle } from "lucide-react"

export default function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="w-full max-w-md px-4 py-3 border rounded-lg shadow-lg bg-destructive/10 border-destructive text-destructive">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-5 h-5" />
          <p className="text-lg font-semibold">Error</p>
        </div>
        <p className="mt-2 text-sm">{message}</p>
      </div>
      <div className="mt-8 text-xl font-bold neon-glow text-primary">
        {"{"}System Malfunction{"}"}
      </div>
    </div>
  )
}
