const router = require("express").Router();
const { Result } = require("../models/verifiedResult");

router.post("/saveResults", async (req, res) => {
	try {
		await new Result(req.body).save();
		res.status(201).send({ message: "Results saved successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router