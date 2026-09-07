async function FetchUser() {
  try {
    const resolve = await fetch("https:///jsonplaceholder.typicode.com/users", {
      method: "GET",
    }); //buat ambil data, lebi bagus lagi pake axous nnati fi front-n

    if (!resolve.ok) throw new Error(resolve);
    const dataDisplay = await resolve.json(); // json ini nanti ngubah ke bentuk object sekaligus mengambil.
    console.log("data berhasil diambil:", dataDisplay);
  } catch (error) {
    console.error("gagal mengambil data", error);
  }
}

FetchUser();
