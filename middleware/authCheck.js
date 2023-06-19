export default function ({ redirect, store, router, $swal, $storage }) {
  const authUser = localStorage.getItem("fakeStoreToken");
  console.log(authUser);
  if (!authUser) {
    redirect("/Login");
    $swal({
      toast: true,
      text: "Please Login",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  }

  
}
