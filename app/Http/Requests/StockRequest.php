<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'tanggal' => ['required'],
            'stock_stuff_id' => ['required', 'integer'],
            'kerjsama_id' => ['required', 'integer'],
            'jumlah' => ['required'],
            'piece_id' => ['required', 'integer'],
            'approve' => ['required'],
        ];
    }
}
