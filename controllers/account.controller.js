async function RenderProfile(req, res) {
    res.status(200).render('../views/user/profile');
}

async function RenderPublication(req, res) {
    res.status(200).render('../views/user/publication');
}

module.exports = { RenderProfile, RenderPublication }