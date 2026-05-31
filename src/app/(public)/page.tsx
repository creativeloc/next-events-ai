import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Homepage() {
  return (
    <div className="p-5 flex flex-col gap-5 w-max">
      <h1>Homepage</h1>
      <Button>Shadcn Default Button</Button>

      <Input placeholder="Shadcn Default Input" />
    </div>
  )
}
export default Homepage
