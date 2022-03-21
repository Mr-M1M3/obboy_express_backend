export function server_error(error, req, res, next){
    console.error(error);
    res.status(500).send("internal server error");
    process.exit(1);
}

export function not_found(req, res, next){
    res.status(404).send("not found");
}