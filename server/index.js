const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

// MiddleWare
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// database userName: job_portal
// database password: SfVN5xcUue7J5ffI
// emni: 7697510ad4a3adcd3e92ff7c65724c37b01be92fee5a939b01c4c5bc1bc3ba3048449b01d2920f35dcfe651e78231d6aaf139d7c8409675aece09b4442a2688d

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0xf8q6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// mongodb create
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    const jobCollection = client.db("jobPortal").collection("jobs");
    const applicationCollection = client
      .db("jobPortal")
      .collection("application");

    // jwt token related api

    app.post("/jwt", async (req, res) => {
      const userData = req.body;
      const token = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "1h",
      });

      // set token in  the cookies
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
      });

      res.send({ success: true });
    });

    // jobs API
    app.post("/jobs", async (req, res) => {
      const jobDoc = req.body;
      const result = await jobCollection.insertOne(jobDoc);
      res.send(result);
    });

    // app.get("/jobs", async (req, res) => {
    //   const email = req?.query?.email;
    //   const query = {
    //     hr_email: email,
    //   };
    //   const result = await jobCollection.find(query).toArray();
    //   res.send(result);
    // });

    app.get("/jobs", async (req, res) => {
      const email = req?.query?.email;
      const query = {};
      if (email) {
        query.hr_email = email;
      }
      const result = await jobCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobCollection.findOne(query);
      res.send(result);
    });

    // Application API
    app.get("/applications", async (req, res) => {
      const result = await applicationCollection.find().toArray();
      res.send(result);
    });

    app.get("/applications/job/:job_id", async (req, res) => {
      const job_id = req.params.job_id;
      console.log("job Id", job_id);
      const query = {
        jobId: job_id,
      };
      const result = await applicationCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/application", async (req, res) => {
      const doc = req.body;
      const result = await applicationCollection.insertOne(doc);
      res.send(result);
    });

    app.patch("/applications/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: req.body.status,
        },
      };
      const result = await applicationCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Job Portal Server Side");
});

app.listen(port, () => {
  console.log(`server running on this ${port} port `);
});
