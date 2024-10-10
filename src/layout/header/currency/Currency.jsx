import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

const Currency = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('Select Currency');
  const [formattedValue, setFormattedValue] = useState('');
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // List of common currencies with numeric values
  const currencies = [
    { code: 'USD', name: 'US Dollar', value: 100, locale: 'en-US' },
    { code: 'EUR', name: 'Euro', value: 85, locale: 'de-DE' },
    { code: 'JPY', name: 'Japanese Yen', value: 15000, locale: 'ja-JP' },
    { code: 'GBP', name: 'British Pound', value: 75, locale: 'en-GB' },
  ];

  // Handle currency selection and format value
  const handleSelect = (currency) => {
    setSelectedCurrency(`${currency.name} (${currency.code})`);

    // Format the value based on the selected currency locale
    const formatter = new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currency.code,
    });
    const formatted = formatter.format(currency.value);

    setFormattedValue(formatted);
  };
  return (
    <div>
      <h3>Selected Currency: {selectedCurrency}</h3>
      <h4>Formatted Value: {formattedValue}</h4>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          {selectedCurrency}
        </DropdownToggle>
        <DropdownMenu>
          {currencies.map((currency, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(currency)}>
              {currency.name} ({currency.code}) - {currency.value}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default Currency