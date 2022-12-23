import { createContext } from "react";
import $ from "jquery";
import { useState } from "react";

export let userContext = createContext();
function UserContextProvider(props) {
  function upUser() {
    $(" html ,body").animate({ scrollTop: 0 }, 500);
  }
  $(window).scroll(function () {
    let windoScroll = $(window).scrollTop();
    if (windoScroll) {
      $(".btnUp").fadeIn(300);
    } else {
      $(".btnUp").fadeOut(300);
    }
  });

  return (
    <userContext.Provider value={{ upUser }}>
      {props.children}
    </userContext.Provider>
  );
}
export default UserContextProvider;
