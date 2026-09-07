async function ambilData() {
  try {
    const mintaData = await fetch(
      "https:///jsonplaceholder.typicode.com/users",
    );
    const dataDisplay = await mintaData.json();
    console.log("data berhasil diambil:", dataDisplay);
  } catch (error) {
    console.error("gagal mengambil data", error);
  }
}

ambilData();
