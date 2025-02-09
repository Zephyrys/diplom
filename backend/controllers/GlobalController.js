class GlobalController {
	constructor(model) {
		this.model = model
	}
	// *CREATE
	async create(req, res) {
		try {
			const document = new this.model(req.body)
			await document.save()
			res.status(201).json(document)
		} catch (error) {
			res.status(400).json({ message: error.message })
		}
	}

	//* GET
	async getAll(req, res) {
		try {
			const documents = await this.model.find()
			res.status(200).json(documents)
		} catch (error) {
			res.status(400).json({ message: error.message })
		}
	}

	async getOne(req, res) {
		try {
			const document = await this.model.findById(req.params.id)
			if (!document) {
				return res.status(404).json({ message: 'Document not found' })
			}
			res.status(200).json(document)
		} catch (error) {
			res.status(400).json({ message: error.message })
		}
	}

	// *UPDATE
	async update(req, res) {
		try {
			const document = await this.model.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			)
			if (!document) {
				return res.status(404).json({ message: 'Document not found' })
			}
			res.status(200).json(document)
		} catch (error) {
			res.status(400).json({ message: error.message })
		}
	}

	// *DELETE
	async delete(req, res) {
		try {
			const document = await this.model.findByIdAndDelete(req.params.id)
			if (!document) {
				return res.status(404).json({ message: 'Document not found' })
			}
			res.status(200).json({ message: 'Document deleted' })
		} catch (error) {
			res.status(400).json({ message: error.message })
		}
	}
}

module.exports = GlobalController
