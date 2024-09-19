import { Button } from '@breadlee/ui';
import typia, { tags } from 'typia';

interface IMember {
  id: string;
  email: string & tags.Format<'email'>;
  age: number & tags.Type<'uint32'> & tags.ExclusiveMinimum<19> & tags.Maximum<100>;
}

function App() {
  const matched: boolean = typia.is<IMember>({
    id: '1234',
    email: 'samchon.github@gmai19l.com',
    age: 30,
  });

  console.log(matched); // true
  return <Button>test</Button>;
}

export default App;
