export function formatGender(gender) {
  if (!gender) {
    return "Non renseigné";
  }

  switch (gender.toLowerCase()) {
    case "female":
      return "Femme";

    case "male":
      return "Homme";

    default:
      return "Non renseigné";
  }
}