
export class ExcursionsAPI {
  async getExcursions() {
    const response = await fetch("http://localhost:3000/excursions");

    return await response.json();
  }

  async addExcursion(excursion) {
    const response = await fetch("http://localhost:3000/excursions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(excursion),
    });

    if (!response.ok) {
      throw new Error("Failed to add new excursion");
    }

    return await response.json();
  }

  async editExcursion(id, excursion) {
    const response = await fetch(`http://localhost:3000/excursions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(excursion),
    });

    if (!response.ok) {
      throw new Error("Failed to edit excursion");
    }

    return await response.json();
  }

  async deleteExcursion(id) {
    await fetch(`http://localhost:3000/excursions/${id}`, {
      method: "DELETE",
    });
  }
}

export default ExcursionsAPI;
