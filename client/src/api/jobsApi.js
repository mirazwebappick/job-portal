export const myPostedJob = async (email) => {
  return await fetch(`http://localhost:3000/jobs?email=${email}`).then((res) =>
    res.json()
  );
};
