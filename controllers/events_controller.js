const events = require("express").Router();
const db = require("../models");
const { Event } = db;
const { Op } = require("sequelize");

// FIND ALL EVENTS
events.get("/", async (req, res) => {
  try {
    const foundEvents = await Event.findAll({
      order: [["start_time", "ASC"]],
      where: {
        name: { [Op.like]: `%${req.query.name ? req.query.name : ""}%` },
      },
    });
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND A SPECIFIC BAND
events.get("/:id", async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_id: req.params.id },
    });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE A BAND
events.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new Event",
      data: newEvent,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE A BAND
events.put("/:id", async (req, res) => {
  try {
    const updatedEvents = await Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedEvents} Event(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE A BAND
events.delete("/:id", async (req, res) => {
  try {
    const deletedEvents = await Event.destroy({
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedEvents} Event(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = events;
