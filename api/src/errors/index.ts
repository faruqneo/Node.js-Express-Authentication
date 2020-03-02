abstract class HttpError extends Error {
    public status!: number
}

class BadRequest extends Error {
    constructor(message = "Bad Request") {
        super(message)

        this.status = 400
    }
}