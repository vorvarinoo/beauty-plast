export const initRangeSteppers = () => {
  const rangeContainer = document.querySelector(".filter-item__cont--range");

  if (!rangeContainer) return;

  const stepperMin = rangeContainer.querySelector(
    ".stepper--min .stepper__input"
  );
  const stepperMax = rangeContainer.querySelector(
    ".stepper--max .stepper__input"
  );

  const stepperMinUp = rangeContainer.querySelector(
    ".stepper--min .stepper__btn--up"
  );
  const stepperMinDown = rangeContainer.querySelector(
    ".stepper--min .stepper__btn--down"
  );

  const stepperMaxUp = rangeContainer.querySelector(
    ".stepper--max .stepper__btn--up"
  );
  const stepperMaxDown = rangeContainer.querySelector(
    ".stepper--max .stepper__btn--down"
  );

  const minGap = 10; // Минимальный разрыв между значениями

  const validateRange = () => {
    let minValue = parseInt(stepperMin.value, 10) || 0;
    let maxValue = parseInt(stepperMax.value, 10) || 0;

    // Если минимальное значение приближается к максимальному, увеличиваем максимальное
    if (maxValue - minValue < minGap) {
      stepperMax.value = minValue + minGap;
      maxValue = parseInt(stepperMax.value, 10);
    }

    // Устанавливаем ширину input в зависимости от значения
    stepperMin.style.width = `${minValue.toString().length + 1}ex`;
    stepperMax.style.width = `${maxValue.toString().length + 1}ex`;
  };

  const addStepperListeners = (stepperInput, stepperUp, stepperDown, isMin) => {
    let count = parseInt(stepperInput.value, 10) || 0;

    stepperInput.addEventListener("keyup", () => {
      count = parseInt(stepperInput.value, 10) || 0;
      validateRange();
    });

    stepperInput.addEventListener("change", () => {
      count = parseInt(stepperInput.value, 10) || 0;
      validateRange();
    });

    stepperUp.addEventListener("click", (e) => {
      e.preventDefault();
      count = parseInt(stepperInput.value, 10) || 0;
      stepperInput.value = count + 1;
      validateRange();

      // Если изменяется минимальный степпер, увеличиваем максимальный
      if (isMin) {
        const maxValue = parseInt(stepperMax.value, 10) || 0;
        if (parseInt(stepperInput.value, 10) + minGap > maxValue) {
          stepperMax.value = parseInt(stepperInput.value, 10) + minGap;
        }
      }
    });

    stepperDown.addEventListener("click", (e) => {
      e.preventDefault();
      count = Math.max((parseInt(stepperInput.value, 10) || 0) - 1, 0);
      stepperInput.value = count;
      validateRange();
    });

    // Добавляем обработчики для стрелок
    stepperInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        count = parseInt(stepperInput.value, 10) || 0;
        stepperInput.value = count + 1;
        validateRange();

        // Если изменяется минимальный степпер, увеличиваем максимальный
        if (isMin) {
          const maxValue = parseInt(stepperMax.value, 10) || 0;
          if (parseInt(stepperInput.value, 10) + minGap > maxValue) {
            stepperMax.value = parseInt(stepperInput.value, 10) + minGap;
          }
        }
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        count = Math.max((parseInt(stepperInput.value, 10) || 0) - 1, 0);
        stepperInput.value = count;
        validateRange();
      }
    });
  };

  // Инициализируем степперы
  addStepperListeners(stepperMin, stepperMinUp, stepperMinDown, true); // isMin = true для минимального
  addStepperListeners(stepperMax, stepperMaxUp, stepperMaxDown, false); // isMin = false для максимального

  // Устанавливаем начальные размеры input
  stepperMin.style.width = `${stepperMin.value.length + 1}ex`;
  stepperMax.style.width = `${stepperMax.value.length + 1}ex`;
};
