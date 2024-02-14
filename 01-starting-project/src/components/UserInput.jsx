
export default function UserInput({ onChangeInput, inputValue }) {

  return (
    <section id="user-input" key={JSON.stringify(inputValue)}>
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={inputValue.initialInvestment}
            required
            name="initialInvestment"
            onChange={(event) =>
                onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={inputValue.annualInvestment}
            required
            name="annualInvestment"
            onChange={(event) =>
                onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return </label>
          <input
            type="number"
            value={inputValue.expectedReturn}
            required
            name="expectedReturn"
            onChange={(event) =>
                onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={inputValue.duration}
            required
            name="duration"
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
