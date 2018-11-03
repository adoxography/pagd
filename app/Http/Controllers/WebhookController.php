<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function postreceive(Request $request) {
        $script = env('POSTRECEIVE_SCRIPT');

        if ($script) {
            $output = shell_exec($script);
            if ($output === null) {
                return 'Error in postreceive script';
            }
            return $output;
        }

        return 'Server not configured to handle postreceive events.';
    }
}
