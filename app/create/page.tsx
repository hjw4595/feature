"use client";

import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Button from "@/components/common/Button";

interface FormProps {
  title: string;
}

const FormBox = ({ title, children }: PropsWithChildren<FormProps>) => {
  return (
    <div className="flex items-center">
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default function CreateStudy() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<{
    title: string;
    category: string;
    locationUrl: string;
    description: string;
  }>({
    title: "",
    category: "",
    locationUrl: "",
    description: "",
  });
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div>
        <div>
          <FormBox title={"제목"}>
            <input type={"submit"} name={"title"} />
            <button onClick={() => {}}></button>
          </FormBox>
          <FormBox title={"주제"}>
            <input
              name={"category"}
              value={inputValue.category}
              onChange={(e) => handleTitleChange(e)}
            />
          </FormBox>
          <FormBox title={"장소"}>
            <input
              name={"locationUrl"}
              value={inputValue.locationUrl}
              onChange={(e) => handleTitleChange(e)}
            />
          </FormBox>
          <FormBox title={"설명"}>
            <input
              name={"description"}
              value={inputValue.description}
              onChange={(e) => handleTitleChange(e)}
            />
          </FormBox>

          <FormBox title={"시작"}>
            <TimePicker
              onChange={setStartTime}
              value={startTime}
              disableClock={true}
            />
          </FormBox>
          <FormBox title={"종료"}>
            <TimePicker
              onChange={setEndTime}
              value={endTime}
              disableClock={true}
            />
          </FormBox>
        </div>
        <Button onClick={() => {}} label={"confirm"} size={"m"} />
      </div>
    )
  );
}
