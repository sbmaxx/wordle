import { KeyValue } from "../../lib/keyboard";
import { getStatuses } from "../../lib/statuses";
import { Key } from "./Key";

type Props = {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  guesses: string[];
};

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses);
  console.log(charStatuses);

  const onClick = (value: KeyValue) => {
    if (value === "ENTER") {
      return onEnter();
    }
    if (value === "DELETE") {
      return onDelete();
    }
    return onChar(value);
  };

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="Й" onClick={onClick} status={charStatuses["Й"]} />
        <Key value="Ц" onClick={onClick} status={charStatuses["Ц"]} />
        <Key value="У" onClick={onClick} status={charStatuses["У"]} />
        <Key value="К" onClick={onClick} status={charStatuses["К"]} />
        <Key value="Е" onClick={onClick} status={charStatuses["Е"]} />
        <Key value="Н" onClick={onClick} status={charStatuses["Н"]} />
        <Key value="Г" onClick={onClick} status={charStatuses["Г"]} />
        <Key value="Ш" onClick={onClick} status={charStatuses["Ш"]} />
        <Key value="О" onClick={onClick} status={charStatuses["О"]} />
        <Key value="З" onClick={onClick} status={charStatuses["З"]} />
        <Key value="Х" onClick={onClick} status={charStatuses["Х"]} />
        <Key value="Ъ" onClick={onClick} status={charStatuses["Ъ"]} />

      </div>
      <div className="flex justify-center mb-1">
        <Key value="Ф" onClick={onClick} status={charStatuses["Ф"]} />
        <Key value="Ы" onClick={onClick} status={charStatuses["Ы"]} />
        <Key value="В" onClick={onClick} status={charStatuses["В"]} />
        <Key value="А" onClick={onClick} status={charStatuses["А"]} />
        <Key value="П" onClick={onClick} status={charStatuses["П"]} />
        <Key value="Р" onClick={onClick} status={charStatuses["Р"]} />
        <Key value="О" onClick={onClick} status={charStatuses["О"]} />
        <Key value="Л" onClick={onClick} status={charStatuses["Л"]} />
        <Key value="Д" onClick={onClick} status={charStatuses["Д"]} />
        <Key value="Ж" onClick={onClick} status={charStatuses["Ж"]} />
        <Key value="Э" onClick={onClick} status={charStatuses["Э"]} />
        <Key value="Ё" onClick={onClick} status={charStatuses["Ё"]} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key value="Я" onClick={onClick} status={charStatuses["Я"]} />
        <Key value="Ч" onClick={onClick} status={charStatuses["Ч"]} />
        <Key value="С" onClick={onClick} status={charStatuses["С"]} />
        <Key value="М" onClick={onClick} status={charStatuses["М"]} />
        <Key value="И" onClick={onClick} status={charStatuses["И"]} />
        <Key value="Т" onClick={onClick} status={charStatuses["Т"]} />
        <Key value="Ь" onClick={onClick} status={charStatuses["Ь"]} />
        <Key value="Б" onClick={onClick} status={charStatuses["Б"]} />
        <Key value="Ю" onClick={onClick} status={charStatuses["Ю"]} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  );
};
