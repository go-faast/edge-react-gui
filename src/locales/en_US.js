// @flow

const strings = {
  app_name: 'Edge Wallet',
  bitcoin_received: '%1$s Received',
  bitcoin_remaining: '%1$s Remaining…',
  calculator_done: 'Done',
  change_mining_fee_body: 'Warning: Low Fees may cause long delays in transaction confirmation',
  change_currency_fee: 'Change Currency',
  could_not_select: 'Could Not Select Wallet',
  dialog_title: 'Set Auto Logoff time',

  drawer_exchange_rate_loading: 'Exchange Rate Loading',
  drawer_exchange: 'Exchange',
  drawer_request: 'Request',
  drawer_scan_qr_send: 'Scan QR (Send)',
  drawer_sweep_private_key: 'Sweep Private Key',
  drawer_wallets: 'Wallets',

  dropdown_exchange_max_amount: 'Exchange Max Amount',
  edge_description: 'This application would like to create or access its wallet in your Edge account.\n\n It will not have access to any other wallets.',
  edge_description_warning:
    'WARNING: The "%1$s" application is requesting full access to your account and all wallets. \n\nOnly accept this login request if you trust this application and where it was downloaded from.',
  exchange_failed: 'Exchange Failed',
  exchange_succeeded: 'Exchange Succeeded',
  no_exchange_amount: 'No Amount Selected',
  select_exchange_amount: 'Please enter an amount to exchange',
  select_exchange_amount_short: 'Enter an Amount',
  exchanges_may_take_minutes: 'Exchanges may take several minutes to process. Please check your destination wallet after a few minutes',
  fragment_wallets_addwallet_blockchain_hint: 'Choose a blockchain',
  fragment_wallets_addwallet_fiat_hint: 'Choose a fiat currency',
  fragmet_wallets_addtoken_option: 'Add Token',
  fragmet_wallets_managetokens_option: 'Manage Tokens',
  managetokens_top_instructions: 'Please select which tokens you would like displayed within the wallet:',
  manage_tokens_duplicate_currency_code: 'A token with that currency code already exists.',
  addtoken_top_instructions: 'To add a token, please fill out the following form and press "Save" ',
  accept_button_text: 'Accept',
  addtoken_contract_address_input_text: 'Contract Address',
  addtoken_currency_code_input_text: 'Token Code',
  addtoken_default_error_message: 'Unable to edit token',
  addtoken_invalid_information: 'Please enter valid token information and try again',
  addtoken_invalid_info_title: 'Token Error',
  addtoken_invalid_decimal_places: 'QR code contains invalid number of decimal places',
  addtoken_invalid_contract_address: 'QR code did not contain a valid contract address',
  addtoken_denomination_input_text: 'Number of Decimal Places',
  addtoken_name_input_text: 'Token Name',
  addtoken_add: 'Add',
  edittoken_top_instructions: 'Fill out token info and tap "Save" to edit token:',
  edittoken_delete_token: 'Delete Token',
  edittoken_delete_prompt: 'Are you sure you want to delete this token?',
  edittoken_delete_title: 'Unable to Edit Token',
  edittoken_duplicate_currency_code: 'A token with that token code already exists.',
  edittoken_invalid_decimal_places: 'Please enter a valid numer of decimal places.',
  edittoken_improper_token_load: 'Unable to load initial data.',
  fragment_wallets_sort: 'Sort',
  fragment_wallets_this_wallet: 'this wallet?',
  fragment_select_wallet_header_title: 'Choose one of the following as selected wallet:',
  fragment_create_wallet_create_wallet: 'Create Wallet',
  fragment_create_wallet_select_valid: 'Please select valid data',
  fragment_excahnge_wallet_from_header_title: 'Choose a wallet to exchange funds from:',
  fragment_excahnge_wallet_to_header_title: 'Choose a wallet to exchange funds to:',
  fragment_insufficient_funds: 'insufficient funds',
  fragmet_invalid_password: 'Invalid Password',
  fragment_request_copy_title: 'Copy',
  fragment_request_subtitle: 'Request',
  fragment_request_address_copied: 'Request address successfully copied to clipboard',
  request_minimum_notification_title: 'Minimum Balance Required',
  request_xrp_minimum_notification_body:
    'Ripple (XRP) wallets require a 20 XRP minimum balance. You must deposit at least 20 XRP to this address before this wallet will show a balance or transactions. 20 XRP will be unspendable for the lifetime of this wallet address.',
  request_xlm_minimum_notification_body:
    'Stellar (XLM) wallets require a 1 XLM minimum balance. You must deposit at least 1 XLM to this address before this wallet will show a balance or transactions. 1 XLM will be unspendable for the lifetime of this wallet address.',
  fragment_send_address_dialog_title: 'Send to Public Address',
  fragment_send_address: 'Address',
  fragment_send_flash: 'Flash',
  fragment_send_other_wallet_header_title: 'Choose a wallet to transfer funds to:',
  fragment_send_send_bitcoin_unscannable: 'Unable to scan QR code',
  scan_invalid_address_error_title: 'Invalid Address',
  scan_invalid_address_error_description: 'Not a valid public address',
  fragment_send_send_to_hint: 'Public Address or Private Key',
  fragment_send_subtitle: 'Send',
  fragment_transaction_exchange: 'Exchange',
  fragment_transaction_expense: 'Expense',
  fragment_transaction_income: 'Income',
  fragment_transaction_list_receive_prefix: 'Received ',
  fragment_transaction_list_sent_prefix: 'Sent ',
  fragment_transaction_transfer: 'Transfer',
  fragment_wallet_unconfirmed: 'Pending',
  fragment_transaction_list_confirmation_progress: '%s of %s Confirmations',
  transaction_list_buy_crypto_message: 'Buy %s with Credit Card',
  transaction_list_no_tx_yet: 'No transactions yet!',
  fragment_wallets_addwallet_name_hint: 'New Wallet Name',
  fragment_wallets_balance_text: 'Total Balance',
  fragment_wallets_fiat_toggle_title: 'Fiat',
  fragment_wallets_crypto_toggle_title: 'Crypto',
  fragment_wallets_delete_wallet: 'Delete Wallet',
  fragment_wallets_set_custom_fees: 'Set Custom Mining Fee',
  fragment_wallets_resync_wallet: 'Resync Wallet',
  fragment_wallets_split_wallet: 'Split Wallet',
  fragment_wallets_get_seed_wallet: 'Get Seed',
  fragment_wallets_seed_share_title: 'Edge Wallet (%s) Seed',
  fragment_wallets_view_xpub: 'View XPub Address',
  fragment_wallets_no_xpub: 'This wallet type does not have a public key',
  fragment_wallets_pubkey_copied_title: 'XPub Address Copied',
  fragment_wallets_pubkey_copied_success: 'The XPub Address has been successfully copied to the clipboard.',
  fragment_wallets_pubkey_copied_error: 'There has been an error copying your XPub Address.',
  fragment_wallets_export_transactions: 'Export Transactions',
  fragment_wallets_header: 'My Wallets',
  fragment_wallets_rename_wallet: 'Rename Wallet',
  fragment_wallets_resync_wallet_first_confirm_message_mobile: 'Are you sure you want to resync \n',
  fragment_wallets_split_wallet_bch_to_bsv:
    'You are about to split this BCH wallet and create a new BSV wallet from your BCH private keys. This requires a BCH transaction to protect your funds from unintentionally being spent on the wrong chain. This will incur a small network transaction fee on the BCH wallet. Please make sure this transaction confirms before making any further BCH transactions. Are you sure you want to split \n',
  fragment_wallets_split_wallet_first_confirm_message_mobile: 'Are you sure you want to split \n',
  fragment_wallets_get_seed_wallet_first_confirm_message_mobile: 'Are you sure you want to reveal the private seed for the following wallet?',
  fragmet_wallets_delete_wallet_first_confirm_message_mobile: 'Are you sure you want to delete \n',
  fragmet_wallets_list_archive_title_capitalized: 'Archive',
  fragment_wallets_syncing_wallet_txs: 'Synchronizing wallet transactions...',
  create_wallet_select_valid_crypto: 'Please select a valid wallet type',
  create_wallet_invalid_input: 'Invalid input',
  create_wallet_select_valid_fiat: 'Please select a valid fiat currency',
  create_wallet_choose_crypto: 'Choose a wallet type',
  create_wallet_invalid_name: 'Invalid wallet name',
  create_wallet_enter_valid_name: 'Please enter a valid wallet name',
  create_wallet_top_instructions: 'Please double-check wallet information and submit:',
  create_wallet_name_label: 'Wallet Name:',
  create_wallet_crypto_type_label: 'Wallet Type:',
  create_wallet_fiat_type_label: 'Wallet Fiat:',
  create_wallet_failed: 'Failed to create wallet',
  help_build: 'Build',
  help_modal_title: 'Crypto Wallet',
  help_version: 'Version',
  loading: 'Loading…',
  mining_fee_high_label_choice: 'High',
  mining_fee_low_label_choice: 'Low',
  mining_fee_standard_label_choice: 'Standard',
  request_qr_email_title: '%1$s %2$s Request',
  request_qr_your_receiving_wallet_address: 'Your Receiving Wallet Address',
  request_share_edge_request: 'Share Edge Request',
  select_recv_wallet: 'Select Receiving Wallet',
  select_src_wallet: 'Select Source Wallet',
  send_confirmation_fee_line: 'Fee: + %s (%s)',
  send_confirmation_max_button_title: 'Send Max Amount',
  send_confirmation_slide_to_confirm: 'Slide to Confirm',
  send_confirmation_balance: 'Balance:',
  send_scan_header_text: 'Scan to Send, Import, or Edge Login',
  send_to_title: 'To: %s',
  send_confirmation_to: 'To: %s',
  send_confirmation_address: 'Address: %s',
  transaction_failure: 'Transaction Failure',
  transaction_success: 'Transaction Success',
  transaction_success_message: 'Your transaction has been successfully sent.',
  incorrect_pin: 'Incorrect PIN',
  invalid_spend_request: 'Invalid Spend Request',
  settings_account_title_cap: 'Account',
  settings_button_change_password: 'Change Password',
  settings_button_debug: 'Debug',
  settings_button_lock_settings: 'Tap to Lock Account Settings',
  settings_button_password_recovery: 'Set Up Password Recovery',
  settings_button_logout: 'Logout',
  settings_button_pin: 'Change PIN',
  settings_exchange_settings: 'Exchange Settings',
  settings_exchange_instruction: 'Enable or disable the exchange providers available to you',
  settings_exchange_enable: 'Enable Exchanges',
  string_enable: 'Enable',
  settings_button_send_logs: 'Send Logs',
  settings_button_setup_two_factor: 'Setup 2 Factor',
  settings_button_unlock_settings: 'Tap to Unlock Account Settings',
  settings_button_use_touchID: 'Use TouchID',
  settings_days: 'Day(s)',
  settings_denominations_title: 'Denominations',
  settings_custom_nodes_title: 'Custom Nodes',
  settings_hours: 'Hour(s)',
  settings_minutes: 'Minute(s)',
  settings_modal_send_logs_title: 'Send logs?',
  settings_modal_send_logs_loading: 'Sending logs is in progress',
  settings_modal_send_logs_success: 'Logs have been sent',
  settings_modal_send_logs_failure: 'Sending logs has failed',
  settings_options_title_cap: 'Options',
  settings_seconds: 'Second(s)',
  settings_select_currency: 'Select a currency',
  settings_title_auto_logoff: 'Auto Log Off After',
  settings_title_currency: 'Default Currency',
  settings_title_pin_login: 'PIN Re-login',
  settings_title: 'Settings',
  settings_alert_unlock: 'Please unlock your account settings',
  settings_enable_custom_nodes: 'Enable Custom Nodes',
  settings_set_custom_nodes_modal_title: 'Set Custom Nodes',
  settings_set_custom_nodes_modal_instructions: 'Please enter the custom nodes you wish to use below (one per row):',
  settings_set_custom_nodes_placeholder: 'https://MyNode.Example:18081',
  string_cancel_cap: 'Cancel',
  string_cancel: 'CANCEL',
  string_delete: 'Delete',
  string_custom_fee: 'Set Fees',
  satPerByte: 'Satoshi Per Byte',
  gasLimit: 'Gas Limit',
  gasPrice: 'Gas Price (Gwei)',
  string_disable: 'DISABLE',
  string_done_cap: 'Done',
  string_fee_with_colon: 'Fee: ',
  string_first_ethereum_wallet_name: 'My Ether',
  string_first_bitcoin_wallet_name: 'My Bitcoin',
  string_first_bitcoincash_wallet_name: 'My Bitcoin Cash',
  my_crypto_wallet_name: 'My %s',
  string_from_exchange_info: 'You are about to exchange\n %1$s %2$s\n (%3$s)\n from %4$s',
  string_help: 'Help',
  string_next: 'NEXT',
  string_next_capitalized: 'Next',
  string_no_name: 'No name',
  string_ok: 'OK',
  string_paste_address: 'Paste %1$s',
  string_rename: 'Rename',
  string_resync: 'Resync',
  string_split: 'Split',
  string_get_seed: 'Get Seed',
  string_save: 'Save',
  string_share: 'Share',
  string_show_balance: 'Show Balance',
  string_to_exchange_info: 'and deposit %1$s %2$s\n to %3$s',
  string_master_private_key: 'Master Private Key',
  string_split_wallet: 'Split %s',
  string_add_edit_tokens: 'Add / Edit Tokens',
  exchange_notes_metadata_generic: 'Exchanged %1$s %2$s from %3$s to %4$s %5$s in %6$s. \nOrder: %7$s. \nFor assistance, please contact %8$s.',
  title_crypto_settings: '%s Settings',
  title_add_tokens: 'Add Tokens',
  title_create_wallet_select_crypto: 'Select Type',
  title_create_wallet_select_fiat: 'Select Fiat',
  title_back: 'Back',
  title_bitcoin_settings: 'Bitcoin Settings',
  title_bitcoinCash_settings: 'Bitcoin Cash Settings',
  title_change_mining_fee: 'Change Mining Fee',
  title_change_password: 'Change Password',
  title_change_pin: 'Change PIN',
  title_confirm_exchange: 'Confirm exchange',
  title_create_wallet: 'Create Wallet',
  title_export_transactions: 'Export Transactions',
  title_default_fiat: 'Default Fiat',
  title_edge_login: 'Edge Login',
  title_ethereum_settings: 'Ethereum Settings',
  title_exchange: 'Exchange',
  title_litecoin_settings: 'Litecoin Settings',
  title_feathercoin_settings: 'Feathercoin Settings',
  title_manage_tokens: 'Manage Tokens',
  title_edit_token: 'Edit Token',
  title_add_token: 'Add Token',
  title_password_recovery: 'Password Recovery',
  title_plugin_buysell: 'Buy Cryptocurrency',
  title_plugin_spend: 'Spend',
  title_otp: '2FA',
  title_request: 'Request',
  title_send_confirmation: 'Send Confirmation',
  title_send: 'Send',
  title_scan: 'Scan',
  title_settings: 'Settings',
  title_terms_of_service: 'Terms of Service',
  title_transaction_details: 'Transaction Details',
  title_transactions: 'Transactions',
  title_wallets: 'Wallets',
  title_use_legacy_address: 'Use Legacy Address',
  title_use_regular_address: 'Use Regular Address',
  token_not_supported: 'Token is not supported by exchange',
  loading_supported_currencies: 'Loading supported currencies',
  no_exchanges_available: 'No Exchanges Enabled',
  check_exchange_settings: 'Please enable them in your Exchange Settings.',
  amount_above_limit: 'Transaction amount is above the max limit of %1$s %2$s',
  amount_below_limit: 'Transaction amount is below the min limit of %1$s %2$s',
  transaction_details_category_title: 'Category',
  transaction_details_payee: 'Payee',
  transaction_details_view_advanced_data: 'View advanced transaction data',
  transaction_details_copy_txid_title: 'Copied',
  transaction_details_copy_txid_message: 'The transaction ID has been copied to your clipboard',
  transaction_details_tx_id_modal_title: 'Transaction ID',
  transaction_details_show_advanced_block_explorer: 'Show in Block Explorer',
  string_fee_with_brackets: '(Fee)',
  title_Header: 'Header',
  back_button_text: 'Back',
  back_button_tap_again_to_exit: 'Please tap BACK again to exit app',
  send_confirmation_enter_send_password: 'Password',
  tx_detail_picker_title: 'Choose a category:',
  transaction_detail_no_wallet: 'No wallet on transaction object',
  transaction_detail_unable_to_load_transaction: 'Unable to load transaction',
  string_confirm: 'Confirm',
  fragment_tx_detail_mining_fee_with_symbol: '+ %1s %2f (Fee)',
  fragment_tx_detail_mining_fee_with_denom: '+ %1f %2s (Fee)',
  transaction_details_notes_title: 'Notes',
  string_search: 'Search',
  confirm_password_text: 'Confirm Password',

  title_otp_keep_modal: 'Two-Factor Authentication (2FA)',
  title_otp_enabled: '2FA is enabled',
  title_otp_disabled: 'Protect your account with 2FA',
  otp_description:
    'Two factor authentication (2FA) prevents unauthorized access from other devices, even if your username and password is compromised. You can scan a QR code or type in an authentication code to seamlessly authorize other devices.',
  otp_enabled_description: 'You can scan a QR code or type in the authentication code to seamlessly authorize other devices.',
  otp_show_code: 'Show authentication code',
  otp_hide_code: 'Hide authentication code',
  otp_disable: 'Disable 2FA',
  otp_keep: 'Keep 2FA',
  otp_enable: 'Enable 2FA',
  otp_enabled_modal_part_one: '2FA has been enabled. A unique authentication code will be generated.',
  otp_enabled_modal_part_two:
    'If you lose your phone or uninstall the app, it will take 7 days to disable 2FA and access your account from another device without the authentication code.',
  otp_disabled_modal: '2FA has been disabled. You can enable it again by tapping on "Enable 2FA" at any time.',
  otp_modal_headline: 'Are you sure you want to disable 2FA?',
  otp_modal_reset_headline: '2FA Reset Requested',
  otp_modal_reset_description:
    'An attempt to login to your account was made by another device and a 2FA reset has been requested. \n\nIf you did not make the request, click "Keep 2FA". Then go to the "Settings" and change your password and PIN. \n\nIf you did request the reset, \nclick on "Disable 2FA".',
  otp_modal_body: '2FA is recommended to keep your device secure from unauthorized access from other devices.',
  otp_notif_title: '2FA disable has been requested by another device',
  otp_notif_body: 'If you did not create this request, log in as %1$s and change your password',

  word_to_in_convert_from_to_string: 'to',

  legacy_address_modal_title: 'Legacy Address Detected',
  legacy_address_modal_warning:
    'Warning: You have scanned a legacy format address that may not be for %1$s as it is indistinguishable from other currency addresses.\n\nDo you want to continue sending to this address?',
  legacy_address_modal_continue: 'Continue',
  legacy_address_modal_cancel: 'Cancel',

  password_reminder_remember_your_password: 'Remember your password?',
  password_reminder_you_will_need_your_password: 'You will need your password if your device gets lost or stolen, or if you uninstall the app.',
  password_reminder_enter_password_below: 'Enter it below to make sure:',
  password_reminder_check_password: 'Check Password',
  password_reminder_forgot_password: 'I forgot, change password',
  password_reminder_postpone: 'Later',
  password_reminder_great_job: 'Great job remembering your password.',
  password_reminder_verified: 'Password Verified',
  password_reminder_invalid: 'Invalid Password',

  password_recovery_reminder_modal_title: 'Password Recovery Setup',
  password_recovery_reminder_modal_message: "You've been accumulating quite a bit of crypto. Would you like to set up your password recovery?",
  password_recovery_reminder_modal_set_up: 'Set Up Now',
  password_check_check_later: 'Later',
  password_check_check_my_password: 'Check MY Password',
  password_check_checking: 'Checking password…',
  password_check_current_password: 'Current password',
  password_check_great_job: 'Great job remembering your password.',
  password_check_incorrect_password_message: 'Incorrect Password. Try again?',
  password_check_incorrect_password_title: 'Incorrect Password.',

  password_check_skip_formatted:
    'Please create a new account and transfer your funds if you forgot your password. Your password CANNOT BE RECOVERED by %1$s and you will lose access to your funds without your password.',
  password_check_skip: 'Please create a new account and transfer your funds if you forgot your password.',

  password: 'Password',

  string_export_qbo: 'Export Quickbooks QBO',
  string_export_qbo_abbrev: 'Email QBO',
  string_export_csv: 'Export CSV',
  string_export_csv_abbrev: 'Email CSV',
  email_address: 'Email Address',
  email_export: 'Enter the email address where you want to send your exported file',

  private_key_modal_private_key: '%1$s Private Key',
  private_key_modal_with_public_address: 'with Public Address:',
  private_key_modal_sweep_from_private_address: 'Sweep Funds From Private Key',
  private_key_modal_send_to_public_address: 'Send Funds to Public Address',
  private_key_modal_import: 'Import',
  private_key_modal_cancel: 'Cancel',
  private_key_modal_success: 'Private key successfully swept',
  private_key_modal_importing_private_key: 'Importing Private Key',

  restore_wallets_modal_title: 'Restore Wallets',
  restore_wallets_modal_description: 'This will restore all deleted and archived wallets',
  restore_wallets_modal_confirm: 'Confirm',
  restore_wallets_modal_cancel: 'Cancel',

  unique_identifier: 'Unique Identifier',
  unique_identifier_dropdown_option: 'Add %s',
  unique_identifier_memo_id: 'Memo ID',
  unique_identifier_destination_tag: 'Destination Tag',
  unique_identifier_payment_id: 'Payment ID',
  unique_identifier_dropdown_option_memo_id: 'Add Memo ID',
  unique_identifier_dropdown_option_destination_tag: 'Add Destination Tag',
  unique_identifier_dropdown_option_payment_id: 'Add Payment ID',
  unique_identifier_modal_title_destination_tag: 'Destination Tag',
  unique_identifier_modal_title_payment_id: 'Payment ID',
  unique_identifier_modal_description: 'Please enter the %s number to be sent to the recipient of this transaction',
  unique_identifier_modal_confirm: 'Confirm',
  unique_identifier_modal_cancel: 'Cancel',
  unique_identifier_display_text: '%1$s: %2$s',
  unique_identifier_add: 'Add %s',

  enter_your_password: 'Enter your password',
  spending_limits: 'Spending Limits',
  spending_limits_daily_title: 'Daily Spending Limit',
  spending_limits_daily_placeholder: 'Daily Spending Limit',
  spending_limits_daily_description: '(Requires password above daily limit)',
  spending_limits_tx_title: 'Transaction Spending Limit',
  spending_limits_tx_placeholder: 'Transaction Spending Limit',
  spending_limits_tx_description: '(Requires PIN above transaction amount)',
  save: 'Save',
  four_digit_pin: '4 Digit PIN',
  pin: 'PIN',
  spending_limits_warning:
    '** Warning **\\n\\nSetting a password spending limit may prevent you from accessing funds if your password is forgotten. Please make sure you have set up password recovery',
  onboarding_button: 'Got It',
  onboarding_skip_button: 'Skip',
  onboarding_slide_1: 'Tap [+] to create new wallets for other cryptocurrencies.\n\nTap on a wallet name to send or receive funds for that wallet.',
  onboarding_slide_2: 'Tap the 3 dots to the right of an Ethereum wallet to add token support.',
  onboarding_slide_3:
    'To receive cryptocurrency, [Copy] or [Share] your wallet address, or have the sender scan your QR code presented here at the Request Screen.',
  onboarding_slide_4: "To send cryptocurrency scan a friend's QR code here, or paste the code via the [Address] button.",
  onboarding_slide_5: 'Exchange cryptocurrencies by choosing the Source Wallet and Receiving Wallet to trade between them.',
  otp_out_of_sync_title: 'Warning',
  otp_out_of_sync_body:
    'This device does not have the proper 2-factor token. You can still access your funds with limited functionality, but cannot create wallets or change account options',
  just_a_moment: 'Just a moment',
  trying_to_find: 'Searching for the best exchange rate...',
  exchange_will_be_sent: '%1$s %2$s will be sent',
  exchange_will_be_received: '%1$s %2$s will be received',
  mining_fee: 'Mining Fee',
  confirm_to_complete_exchange: 'Confirm to complete your exchange.',
  kyc_title: 'Customer Information Needed',
  kyc_message: 'The available exchange for this transaction requires a ShapeShift account. Please create an account to continue.',
  scan_camera_permission_denied: 'To scan a QR Code, please enable Camera access in Settings',
  open_settings: 'Open Settings',
  currency_mismatch_popup_title: 'Currency Mismatch',
  currency_mismatch_popup_body: 'You scanned a QR code requesting an address for %s. Please switch to a %s wallet first and re-scan the QR code.',
  request_crypto_address_modal_title: 'Request Address',
  request_crypto_address_modal_body:
    'The service "%s" is requesting an address from your %s wallet to send you money. The address will be sent to the following URL:',
  request_crypto_address_modal_send_address_button: 'Send Address',
  kyc_something_wrong: 'Something went wrong',
  kyc_something_wrong_message: 'Please try again later',
  kyc_ss_finish: 'Please complete ID verification for %s',
  ss_geolock: 'Location restricted. Unable to complete exchange.',
  ss_unable: 'No enabled exchanges support %1$s to %2$s.',
  ss_visit_website: 'Go to ShapeShift.io',
  ss_need_more_kyc:
    'You have an active ShapeShift account linked to this Edge account. However, it still requires verification before ShapeShift can process this exchange request. Please proceed to ShapeShift.io, login with your ShapeShift account credentials, and complete your verification.',
  ss_login: 'Create / Sign In',
  ss_logout: 'Sign Out',
  account: 'Account'
}

// export default strings
module.exports = strings
