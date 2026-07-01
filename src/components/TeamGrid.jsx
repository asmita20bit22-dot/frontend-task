import ProfileCard from "./ProfileCard";

function TeamGrid({ profiles }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gray-50">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          image={profile.image}
          name={profile.name}
          role={profile.role}
          email={profile.email}
          status={profile.status}
        />
      ))}
    </div>
  );
}

export default TeamGrid;