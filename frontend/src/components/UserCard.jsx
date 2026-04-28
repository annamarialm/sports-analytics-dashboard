function UserCard({ user }) {
  return (
    <section>
      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>{user.age} ans</p>

      <p>{user.height} cm</p>

      <p>{user.weight} kg</p>
    </section>
  );
}

export default UserCard;