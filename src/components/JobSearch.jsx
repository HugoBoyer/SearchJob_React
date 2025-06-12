import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const mockJobs = [
  { id: 1, title: "Développeur React", company: "TechCorp", location: "Paris", description: "Développement d'applications web." },
  { id: 2, title: "Designer UX/UI", company: "Designify", location: "Lyon", description: "Conception d'interfaces utilisateur." },
  { id: 3, title: "Chef de Projet IT", company: "Innova", location: "Marseille", description: "Gestion de projets informatiques." },
  { id: 4, title: "Designer UX/UI", company: "TechMobile", location: "Lyon", description: "Conception d'interfaces utilisateur." },
  { id: 5, title: "Designer UX/UI", company: "CityCorp", location: "Canne", description: "Conception d'interfaces utilisateur." },
  { id: 6, title: "Designer UX/UI", company: "CorporationTech", location: "Nice", description: "Conception d'interfaces utilisateur." },
  { id: 7, title: "Designer UX/UI", company: "Designify", location: "Lyon", description: "Conception d'interfaces utilisateur." },

];

export function JobSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(mockJobs);

  useEffect(() => {
    const filtered = mockJobs.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
    <div>
      <h1 className="mb-4">Offres d'emploi</h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Rechercher un poste, une entreprise, une ville..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="row g-3">
        {results.length === 0 ? (
          <p>Aucun résultat trouvé.</p>
        ) : (
          results.map((job) => (
            <motion.div key={job.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-12 col-md-6">
              <div className="card shadow rounded-3 h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{job.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{job.company} - {job.location}</h6>
                  <p className="card-text flex-grow-1">{job.description}</p>
                  <button className="btn btn-primary mt-auto">Postuler</button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
