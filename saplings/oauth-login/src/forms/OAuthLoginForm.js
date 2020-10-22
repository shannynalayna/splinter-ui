/**
 * Copyright 2018-2020 Cargill Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from 'react';
import './OAuthLoginForm.scss';

export function OAuthLoginForm() {
  const [password, setPassword] = useState(null);

  const handleChange = event => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div className="oauth-login-form">
      <div className="form-header">
        <div className="form-title">Log In</div>
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          placeholder="Username"
        />
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div className="form-btn-wrapper">
        <button
          type="button"
          disabled={!password}
          className="form-button form-btn log-in"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
