export const myApplicationsPromises = async (email) => {
  return await fetch(`http://localhost:3000/applications?email=${email}`).then(
    (res) => res.json()
  );
};
