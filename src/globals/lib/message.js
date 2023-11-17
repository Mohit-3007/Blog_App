const builder = {
    unauthorized: (prefix) => builder.prepare(403, prefix, 'Authentication Error, please try loggin again!'),
    required_field: (prefix) => builder.prepare(401, prefix, 'is a required field!'),
    invalid_request: (prefix) => builder.prepare(400, prefix, ' is not valid'),
    success: (prefix) => builder.prepare(200, prefix, 'Successfully!'),
    error: (prefix) => builder.prepare(501, prefix, 'error!'),
    custom: (message) => builder.prepare(400, message, "")
}

Object.defineProperty(builder, 'prepare', {
    writable: false,
    value: (code, prefix, message) => {
        return ({
                code,
                message: `${prefix ? `${prefix} ${message}` : message}`
        })
    }
})

module.exports = builder;