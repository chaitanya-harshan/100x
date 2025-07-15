interface User1 {
  id: string;
  name: string;
}

// Using Record to type an object with string keys and User values
type Users1 = Record<string, User1>;

const users11: Users1 = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users11['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


// --------------------------------------------------------------------------------------------
// Map

const userMap = new Map<string, User1>();
userMap.set('raj', { id: '1@25', name: 'Raj' });
userMap.set('ram', { id: '2@25', name: 'sharon'});

const user_raj = userMap.get('raj');
