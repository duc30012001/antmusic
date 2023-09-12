/* eslint-disable no-unused-vars */
import { InputNumber } from 'antd';
import React, { useEffect, useState } from 'react';

interface NumberInputProps {
  className?: string;
  placeholder?: string;
  key?: string | number;
  disabled?: boolean;
  min?: string | number;
  value?: string | number;
  style?: React.CSSProperties;
  precision?: any;
  onPressEnter?: () => void;
  addonAfter?: any;
  addonBefore?: any;
  noStyle?: boolean;
  setRef?: any;
  onBlur?: () => void;
  onChange?: (value: string | number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  className,
  placeholder,
  key,
  disabled,
  min,
  value: propValue,
  style,
  precision,
  onPressEnter,
  addonAfter,
  addonBefore,
  noStyle,
  setRef,
  onBlur,
  onChange,
}: NumberInputProps) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = (newValue: string | number | null) => {
    newValue = newValue ?? ''; // Provide a default empty string value
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if (
      (!Number.isNaN(newValue) && reg.test(newValue as string)) ||
      newValue === '' ||
      newValue === '-'
    ) {
      if (onChange) onChange(newValue);
      setValue(newValue);
    }
  };

  const handleBlur = () => {
    if (
      (value &&
        value.toString().charAt((value as string).length - 1) === '.') ||
      value === '-'
    ) {
      if (onChange) onChange((value as string).slice(0, -1));
      setValue((value as string).slice(0, -1));
    }
    if (onBlur) {
      onBlur();
    }
  };

  const styleAddon =
    addonAfter || addonBefore
      ? {
          verticalAlign: 'middle',
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        }
      : {};

  return (
    <div
      className="styled-number-input"
      style={noStyle ? {} : { display: 'flex', width: '100%' }}
    >
      {addonBefore && (
        <div
          className="ant-input-number-group-addon"
          style={{
            paddingTop: '2px',
            verticalAlign: 'middle',
            display: 'inline-table',
            lineHeight: '24px',
            height: '32px',
            ...style,
            width: 'auto',
          }}
        >
          {addonBefore}
        </div>
      )}
      <InputNumber
        ref={setRef}
        key={key}
        min={min || 0}
        precision={precision}
        value={value as string | number}
        disabled={disabled}
        formatter={(newValue) =>
          `${newValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        onChange={(newValue) => handleChange(newValue)}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={{
          width: '100%',
          color:
            !(min && min !== 0) && Number(value || 0) < 0
              ? 'red'
              : 'rgba(0, 0, 0, 0.9)',
          ...styleAddon,
          ...style,
        }}
        maxLength={25}
        onPressEnter={onPressEnter}
        className={className}
      />
      {addonAfter && (
        <div
          className="ant-input-number-group-addon"
          style={{
            paddingTop: '2px',
            verticalAlign: 'middle',
            display: 'inline-table',
            lineHeight: '24px',
            height: '32px',
            ...style,
            width: 'auto',
          }}
        >
          {addonAfter}
        </div>
      )}
    </div>
  );
};
