import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Добро пожаловать на интервью!</h1>
      <p className="text-xl text-muted-foreground mb-10">
        Сегодня тебе предстоит выполнить 5 задач, направленных на проверку навыков работы с React, Next.js и фронтендом в целом. Все задания оформлены в стилистике Minecraft.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Task 1: Code Review</CardTitle>
            <CardDescription>Next.js & React knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            Find and fix the anti-patterns in a poorly written Server vs Client Component. Connect it properly.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task 2: State Manager</CardTitle>
            <CardDescription>Zustand / Redux</CardDescription>
          </CardHeader>
          <CardContent>
            Implement a store for a Minecraft crafting table inventory to select and move items.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task 3: Virtualization</CardTitle>
            <CardDescription>Large data rendering</CardDescription>
          </CardHeader>
          <CardContent>
            Optimize a massive list of 50,000 Minecraft blocks so it doesn't freeze the browser.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task 4: Resource Leaks</CardTitle>
            <CardDescription>Debugging and Performance</CardDescription>
          </CardHeader>
          <CardContent>
            Find and fix a memory/resource leak in the "Live Player Coordinates" tracker widget.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task 5: Swagger Codegen</CardTitle>
            <CardDescription>API & TypeScript</CardDescription>
          </CardHeader>
          <CardContent>
            Generate precise TypeScript interfaces and API clients from a provided Swagger file.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
