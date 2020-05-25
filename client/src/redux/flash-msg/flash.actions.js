import { ADD_FLASH_MESSAGE } from './flash.types';

export function addFlashMessage(message) {
	return {
		type: ADD_FLASH_MESSAGE,
		message
	}
}