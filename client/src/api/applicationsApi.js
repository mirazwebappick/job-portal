export const myApplicationsPromises = async (email) => {
  return await fetch(`http://localhost:3000/applications?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};
