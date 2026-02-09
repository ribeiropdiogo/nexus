db.createUser(
    {
        user: "nexus",
        pwd: "nexus",
        roles: [
            {
                role: "readWrite",
                db: "nexus"
            }
        ]
    }
);