export default function Groups({ groups = [] }) {
  return (
    <div>
        <h1>Groups</h1>
      {groups.map((group) => (
        <button key={group.id}>
          <div>
            <h2>{group.name}</h2>
            <p>{group.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}