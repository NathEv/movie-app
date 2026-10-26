import { useState } from "react";

const initialForm = { title: "", rating: "" };

// 5.5 : fonction pure, hors du composant ; renvoie { champ: message } ({} = valide)
function validate({ title, rating }) {
  const errors = {};
  if (!title.trim()) errors.title = "Le titre est obligatoire";
  const r = Number(rating);
  if (rating === "" || r < 0 || r > 10) errors.rating = "Note entre 0 et 10";
  return errors;
}

export default function AddMovieForm({ onAdd }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(form); // dérivé : recalculé à chaque rendu, jamais stocké

  // 5.4 : un seul handleChange pour tous les champs, grâce à l'attribut name
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // sinon la page se recharge et le state est perdu
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;

    // Les valeurs saisies sont des strings : on convertit au moment de l'envoi.
    // crypto.randomUUID() : un id unique, indispensable pour key et pour les likes.
    onAdd({ id: crypto.randomUUID(), title: form.title.trim(), rating: Number(form.rating) });
    setForm(initialForm);
    setSubmitted(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="title">Titre</label>
      <input id="title" name="title" value={form.title} onChange={handleChange} />
      {submitted && errors.title && <p className="form-error" role="alert">{errors.title}</p>}

      <label htmlFor="rating">Note (0 à 10)</label>
      <input id="rating" name="rating" type="number" step="0.1" value={form.rating} onChange={handleChange} />
      {submitted && errors.rating && <p className="form-error" role="alert">{errors.rating}</p>}

      <button type="submit" className="btn">
        Ajouter
      </button>
    </form>
  );
}
