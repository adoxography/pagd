<?php

namespace App\Http\Controllers\Morphology;

use App\Models\Morphology\Gloss;
use Illuminate\Http\Request;
use App\Http\Controllers\ClosedController;

/**
 * HTTP Controller for glosses
 */
class GlossController extends ClosedController
{
    /**
     * Show the list of glosses
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->setItems(Gloss::orderBy('abv')->get());
        $this->setModel('glosses');
        return parent::index();
    }

    /**
     * Show the gloss details.
     *
     * @param Gloss $gloss
     * @return \Illuminate\Http\Response
     * @internal param The $Gloss gloss
     */
    public function show(Gloss $gloss)
    {
        return parent::showItem($gloss);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return parent::createItem(new Gloss());
    }

    public function clone(Gloss $gloss)
    {
        return parent::createItem($gloss);
    }

    /**
     * Show the gloss edit form
     *
     * @param Gloss $gloss the gloss
     * @return \Illuminate\Http\Response
     */
    public function edit(Gloss $gloss)
    {
        return parent::editItem($gloss);
    }

    public function store(Request $request)
    {
        $item = Gloss::create($request->all());

        return parent::storeItem($item);
    }

    /**
     * Update a gloss
     *
     * @param \Illuminate\Http\Request
     * @param Gloss $gloss the gloss
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gloss $gloss)
    {
        return parent::updateItem($request, $gloss);
    }

    /**
     * Destroy a gloss
     *
     * @param Gloss $gloss the gloss
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gloss $gloss)
    {
        return parent::destroyItem($gloss);
    }
}
