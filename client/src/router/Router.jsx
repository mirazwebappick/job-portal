import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/Job/JobDetails";
import PrivateRouter from "../routes/PrivateRouter";
import JobApply from "../pages/Job/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "job_apply/:id",
        element: (
          <PrivateRouter>
            <JobApply />
          </PrivateRouter>
        ),
      },
      {
        path: "my_applications",
        element: (
          <PrivateRouter>
            <MyApplications />
          </PrivateRouter>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivateRouter>
            <AddJob />
          </PrivateRouter>
        ),
      },
      {
        path: "my-posted-job",
        element: (
          <PrivateRouter>
            <MyPostedJobs />
          </PrivateRouter>
        ),
      },
      {
        path: "applications/:job_id",
        element: (
          <PrivateRouter>
            <ViewApplications />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`).then(
            (res) => res.json()
          ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
