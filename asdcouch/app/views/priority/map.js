function (doc) {
	if (doc.priorityLevel) {
		emit(doc.priorityLevel, {
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