
function showResults() {
    var questions = document.getElementById("quiz").elements;
    var results = document.getElementById("results");
    var correct = 0;

    for (var i = 0; i < questions.length; i++) {
      if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "C. /etc/inittab") {
        correct++;
      } else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "B. /sbin/init") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "D. wall") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "D. quiet") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "E. systemd.unit=rescue.target") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "D. No action is required") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "A. apt-get update") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "B. yumdownloader kernel") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "D. Windows NT does not support Safe Mode") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "C. LD_LIBRARY_PATH") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "B. rpm -qf /etc/exports") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "C. --purge") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "D. /etc/apt/sources.list") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "C. dd if=/dev/zero of=/dev/sda bs=440 count=1") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "B. dd") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "C. standard output to standard error.") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "D. cut -d: -f1,7 /etc/passwd") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "B. -maxdepth") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "D. kill -TERM 123") {
        correct++;
      }
      else if (questions[i].type === "radio" && questions[i].checked && questions[i].value === "B. 19") {
        correct++;
      }
      
    }

    results.innerHTML = "Correct answers: " + correct + "/20";
  }

  /* mensaje
  fff*/ 