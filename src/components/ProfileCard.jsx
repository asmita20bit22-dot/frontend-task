// // function ProfileCard({ image, name, role, email, status }) {
//   const isActive = status.toLowerCase() === "active";
//   const displayStatus = isActive ? "Active" : "Inactive"; // normalize display text

//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
//       <img
//         src={image}
//         alt={name}
//         className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 mb-4"
//       />

//       <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
//       <p className="text-sm text-gray-500 mb-2">{role}</p>
//       <p className="text-sm text-gray-400 mb-4 break-all">{email}</p>

//       <span
//         className={`px-3 py-1 text-xs font-medium rounded-full  ${
//           isActive
//             ? "bg-green-100 text-green-700"
//             : "bg-red-100 text-red-700"
//         }`}
//       >
//         {displayStatus}
//       </span>
//     </div>
//   );
// }

// export default ProfileCard;

function ProfileCard({ image, name, role, email, status }) {
  const isActive = status.toLowerCase() === "active";
  const displayStatus = isActive ? "Active" : "Inactive";

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
      
      {/* Avatar with gradient ring */}
      <div className="relative mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 p-[3px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <img
          src={image}
          alt={name}
          className="relative w-24 h-24 rounded-full object-cover p-1"
        />
      </div>

      {/* Name & Role */}
      <h2 className="text-lg font-bold text-red-600 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        {name}
      </h2>
      <p className="text-sm font-medium text-indigo-500 mb-3">{role}</p>

      {/* Divider */}
      <div className="w-10 h-[2px] bg-gray-200 rounded-full mb-3"></div>

      {/* Email */}
      <p className="text-sm text-gray-400 mb-4 break-all">{email}</p>

      {/* Status badge */}
      <span
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full ${
          isActive
            ? "bg-green-50 text-green-600 ring-1 ring-green-200"
            : "bg-red-50 text-red-600 ring-1 ring-red-200"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isActive ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
        {displayStatus}
      </span>
    </div>
  );
}

export default ProfileCard;