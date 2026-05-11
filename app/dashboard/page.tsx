import { createClient } from '@/utils/supabase/server'

export default async function Page() {

  const supabase = await createClient()

  const { data, error } = await supabase
    .from('employee')
    .select('*')

  console.log('DATA:', data)
  console.log('ERROR:', error)

  return (
    <div>
      <h1>Employee</h1>

      {data?.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  )
}