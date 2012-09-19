function (doc) {
	if (doc._id.substr(0, 5) === "task:") {
		emit(doc._id, {
			"name": doc.name,
			"category": doc.category,
			"priority": doc.priorityLevel,
			"start": doc.startUp,
			"end": doc.ending,
			"alert": doc.alertOption,
			"note": doc.note
			
		});
	}
};