jQuery(document).ready(function ($) {
    $(".toolspedia-outbound").on("click", function (e) {
      // e.preventDefault(); // Prevent default behavior of the button (if any)
  
      // Find the closest parent containing `.e-con-inner` and get the anchor tag's href
      const postUrl = $(this)
        .closest(".e-con-inner")
        .find(".elementor-heading-title a")
        .attr("href");
  
      if (postUrl) {
        // Extract the last segment of the URL
        const urlSegment = postUrl.split("/").filter(Boolean).pop();
  
        fetch(TATPObject.ajax_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          body: new URLSearchParams({
            action: "tatp_request",
            postUrl: urlSegment,
            security: TATPObject.nonce
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        console.error("No anchor href found for the button.");
      }
    });
  });
  